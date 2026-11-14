import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    q: "How can I place an order?",
    a: "Select your product, choose the size and quantity, then click 'Add to Cart' or 'Buy it Now' and complete the checkout. You can also order through our WhatsApp fashion consultant.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are usually dispatched within 3-5 working days. Delivery takes 3-7 working days after dispatch, depending on your city. Bridal and made-to-order pieces may take longer.",
  },
  {
    q: "What are the shipping charges?",
    a: "Shipping charges are calculated at checkout based on your location. Free shipping may be available on selected orders.",
  },
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "Yes, COD is available across Pakistan. Online payment options are also available at checkout.",
  },
  {
    q: "Can I return or exchange my order?",
    a: "Exchange requests must be made within 7 days of receiving the order. Items must be unused, unwashed and in original packaging with tags. Sale items are not returnable.",
  },
  {
    q: "What if I receive a damaged or wrong item?",
    a: "Please contact us on WhatsApp within 48 hours of delivery with pictures of the item and your order number, and we will resolve it quickly.",
  },
  {
    q: "Is the color of the product same as shown in pictures?",
    a: "We try our best to show accurate colors, but slight variations may occur due to photography, lighting and screen settings.",
  },
  {
    q: "Can I get my outfit stitched?",
    a: "Unstitched pieces are sold as fabric. For stitching or custom sizing, please contact our fashion consultant on WhatsApp.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order is dispatched, you will receive a tracking number via WhatsApp or email.",
  },
  {
    q: "How can I contact you?",
    a: "You can reach us through the 'Chat on WhatsApp' button on our website or via the Contact Us page.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-[60vh]">
      <h1 className="text-center text-2xl font-medium tracking-wide uppercase mb-10">
        Frequently Asked Questions
      </h1>

      <div className="border-t border-gray-300">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-gray-300">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left py-5 text-sm font-medium tracking-wide hover:opacity-70 transition"
              >
                <span>{item.q}</span>
                {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;