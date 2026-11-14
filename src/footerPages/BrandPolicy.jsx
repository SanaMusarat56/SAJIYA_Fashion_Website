const sections = [
  {
    title: "1. Customer Support Channels",
    list: ["WhatsApp", "Calls", "Instagram", "Facebook", "E-mail"],
    text: "We aim to respond within 24 hours on working days. During launches and sale periods, responses may take slightly longer.",
  },
  {
    title: "2. Order Processing",
    text: "Order confirmation is sent via Email/WhatsApp within 24-48 hours, along with the processing time below:",
    list: [
      "Unstitched / Pret / RTW: 24-48 hours",
      "Luxury Pret: 4-5 weeks",
      "Formals: 8-12 weeks",
      "Bridals: 12-15 weeks",
    ],
    after:
      "Every order is carefully prepared and quality-checked before dispatch. Tracking details are shared once the order is shipped.",
  },
  {
    title: "3. Shipping Policy",
    list: [
      "Local delivery takes up to 2-3 business days after dispatch",
      "International delivery takes up to 5-10 business days after dispatch, depending on the shipping method chosen at checkout",
      "Delivery charges are calculated at checkout",
      "Delays may occur due to weather, logistics or customs related concerns",
    ],
    note: "PLEASE NOTE: Customs charges depend on the destination country's customs department. The brand is not responsible for duty/customs charges, and the customer is liable to pay them for parcel clearance. No refund will be given if the customer refuses to pay duty charges.",
  },
  {
    title: "4. Cancellation Policy",
    text: "Paid orders can be cancelled within 24 hours of order confirmation. Please notify us within this time if you wish to cancel your order.",
  },
  {
    title: "5. Complaint Policy",
    list: [
      "All complaints are handled on priority",
      "Resolution time is 2-5 working days",
    ],
    after:
      "Please share your complaint within 48 hours of receiving the parcel, with your order number, pictures of the received outfit and details of your concern. We appreciate your cooperation.",
    note: "NOTE: We expect respectful communication from customers and request that abusive or inappropriate behavior be avoided.",
  },
  {
    title: "6. Exchange Policy",
    text: "For Pret / Unstitched, an exchange can only be requested within 48 hours of receiving the parcel. The outfit must be unworn, unwashed, with original packaging and tags intact. Valid reasons for exchange:",
    list: ["Size issue", "Defective item received", "Incorrect item received"],
    after:
      "All exchanges are subject to stock availability, and the customer is responsible for the return shipping cost. For Luxury Pret, Formals and Bridals, no exchange or replacement can be offered.",
  },
  {
    title: "7. Return & Refund Policy",
    text: "Returns/refunds are offered only if a defective or incorrect product is received. The customer must send the item back to proceed with the refund request.",
    list: [
      "Approved refunds are processed within 5-7 business days",
      "Refunds are made via the original payment method (bank transfer or card payment)",
    ],
  },
  {
    title: "8. Product Information",
    list: [
      "We strive to display colors and details accurately",
      "Slight variations may occur due to lighting or screen resolution",
      "A size chart is provided with each product. If you are unsure about sizing, contact us on WhatsApp",
    ],
  },
  {
    title: "9. Privacy Policy",
    text: "Your privacy matters to us. All personal information is handled with strict confidentiality and is used only to process your order and improve your shopping experience.",
  },
];

function BrandPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-medium tracking-wide uppercase mb-2">
          Brand Policy
        </h1>
      </div>

    <h2 className="text-lg font-medium">Customer Service Policy</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-10 text-left">
        Brand: Sajiya (Online Store)
        <br />
        At Sajiya, we are committed to a seamless and refined shopping
        experience. From placing your order to final delivery, our team is here
        to assist you every step of the way.
      </p>

      {sections.map((s) => (
        <div key={s.title} className="mb-10">
          {/* Section heading: center */}
          <h3 className="text-base font-semibold mb-3 text-center">
            {s.title}
          </h3>

          {/* Section content: left */}
          <div className="text-left">
            {s.text && (
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {s.text}
              </p>
            )}

            {s.list && (
              <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-3">
                {s.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {s.after && (
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {s.after}
              </p>
            )}

            {s.note && (
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                {s.note}
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="mt-12 border-t border-gray-300 pt-8">
        <h3 className="text-base font-semibold mb-3 text-center">
          A Note to Our Customers
        </h3>
        <div className="text-left">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            We take pride in serving you with respect, care and attention to
            detail. In return, we appreciate courteous communication so we can
            assist you better.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Policy Updates:</span> Sajiya
            reserves the right to update these policies at any time. Updates
            will be reflected on our official website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandPolicy;