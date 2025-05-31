function MapSection({ type, address, title, src }) {
    return (
        <>
          <div className="text-white p-2 max-w-4xl mx-auto text-center">
                <p className="font-medium">{type}</p>
                <p>{address}</p>
            </div>
        <div className="w-full h-[300px]">
          
            <iframe
                title={title}
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpreferrerPolicyolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        </>
    );
}

export default MapSection;
