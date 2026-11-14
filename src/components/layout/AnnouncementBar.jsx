function AnnouncementBar() {
  return (
    <div className="bg-black text-white h-10 flex items-center justify-center overflow-hidden">
      <div className="flex whitespace-nowrap">
        <marquee className="mx-20 upercase trackin-[4px] text-[12px] font-medium">
          Do not make any payments to the courier service before receiving the
          COD parcel. Additionally, do not accept the shipment if the official
          Sajiya logo is not clearly displayed on the packing flyer. Do not make
          any payments to the courier service before receiving the COD parcel.
          Additionally, do not accept the shipment if the official Sajiya logo
          is not clearly displayed on the packing flyer.
        </marquee>
      </div>
    </div>
  );
}
export default AnnouncementBar;
