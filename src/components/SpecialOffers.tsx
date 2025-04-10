
import { offers } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="py-10 md:py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
        <p className="text-gray-600 mb-8">Exclusive deals and discounts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md border border-orange-100 transition-transform hover:-translate-y-1"
            >
              <div className="bg-orange-500 text-white py-4 px-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-xl">{offer.title}</h3>
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-gray-100 py-1 px-3 rounded border border-gray-200">
                    <code className="font-mono font-medium text-navy-600">{offer.code}</code>
                  </div>
                  <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
