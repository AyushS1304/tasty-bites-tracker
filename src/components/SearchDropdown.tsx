
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItem } from "@/context/StoreContext";
import { 
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Search } from "lucide-react";

interface SearchDropdownProps {
  searchQuery: string;
  items: FoodItem[];
  onSelect: (item: FoodItem) => void;
  onSearchChange: (query: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

const SearchDropdown = ({
  searchQuery,
  items,
  onSelect,
  onSearchChange,
  onClear,
  placeholder = "Search for dishes...",
  className = "",
}: SearchDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<FoodItem[]>([]);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update recommendations when search query changes
  useEffect(() => {
    if (!searchQuery) {
      // When empty, recommend popular items
      const popularItems = [...items]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
      setRecommendations(popularItems);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Direct matches
    const directMatches = items.filter(
      item => item.name.toLowerCase().includes(query) || 
              item.category.toLowerCase().includes(query) ||
              item.cuisine.toLowerCase().includes(query)
    );
    
    // Additional recommendation logic - related items based on category
    const categoryMatches = directMatches.length > 0 
      ? items.filter(item => 
          !directMatches.includes(item) && 
          directMatches.some(match => match.category === item.category)
        ).slice(0, 3)
      : [];
    
    // Combine and limit results
    const allRecommendations = [...directMatches, ...categoryMatches].slice(0, 8);
    setRecommendations(allRecommendations);
  }, [searchQuery, items]);

  // Handler for search input focus
  const handleFocus = () => {
    setOpen(true);
  };

  // Handler for item selection
  const handleSelect = (item: FoodItem) => {
    onSelect(item);
    setOpen(false);
    navigate(`/menu?search=${encodeURIComponent(item.name)}`);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="pl-10 pr-10 py-2 w-full h-10 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {searchQuery && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <span className="h-5 w-5 text-gray-400 hover:text-gray-600">&times;</span>
          </button>
        )}
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-md">
          <Command className="rounded-lg border shadow-md">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {recommendations.length > 0 && (
                <CommandGroup heading={searchQuery ? "Search Results" : "Popular Items"}>
                  {recommendations.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() => handleSelect(item)}
                      className="cursor-pointer flex items-center gap-2 p-2 hover:bg-accent"
                    >
                      <div className="h-8 w-8 overflow-hidden rounded-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.category} • {item.cuisine}</span>
                      </div>
                      <div className="ml-auto font-medium">₹{item.price}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
