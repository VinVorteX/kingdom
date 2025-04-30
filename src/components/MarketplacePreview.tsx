
import React from 'react';
import { Button } from "@/components/ui/button";

const domains = [
  {
    name: "digitalassets.com",
    category: "Finance",
    price: 7850,
    status: "Buy Now",
    statusColor: "green"
  },
  {
    name: "aitools.io",
    category: "Technology",
    price: 4120,
    status: "Bidding Soon",
    statusColor: "yellow"
  },
  {
    name: "metashop.com",
    category: "E-commerce",
    price: 9300,
    status: "Buy Now",
    statusColor: "green"
  },
  {
    name: "cryptoventure.xyz",
    category: "Crypto",
    price: 2650,
    status: "On Auction",
    statusColor: "blue"
  },
  {
    name: "nfthub.io",
    category: "Digital Art",
    price: 5400,
    status: "Bidding Soon",
    statusColor: "yellow"
  },
  {
    name: "techfounder.com",
    category: "Startup",
    price: 6725,
    status: "Buy Now",
    statusColor: "green"
  }
];

const MarketplacePreview = () => {
  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kingdom-blue">Live Marketplace Preview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our curated selection of premium domains available for purchase or bidding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div key={index} className="card-domain overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-kingdom-blue">{domain.name}</h3>
                    <p className="text-sm text-gray-500">{domain.category}</p>
                  </div>
                  <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                    domain.statusColor === 'green' ? 'bg-green-100 text-green-700' : 
                    domain.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {domain.status}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-kingdom-blue font-bold">${domain.price.toLocaleString()}</span>
                  <Button variant="outline" className="text-kingdom-blue border-kingdom-gold hover:bg-kingdom-gold/10 hover:border-kingdom-gold">
                    View Details
                  </Button>
                </div>
              </div>
              
              {/* Visual indicator at the bottom of each card */}
              <div className="h-1 w-full bg-gray-100">
                <div 
                  className="h-full bg-gold-gradient"
                  style={{width: `${Math.random() * 70 + 30}%`}} // Random width between 30% and 100%
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-gold px-8 py-3">
            Explore the Market
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
