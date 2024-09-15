import React from 'react'

export default function WarningMessage() {
    return (
        <>
            <div className="bg-orange-700 text-white p-4 rounded-md flex items-start mt-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png" alt="Info Icon" className="w-5 h-5 mr-3 mt-1" />
                <p className="text-base leading-relaxed">
                    Bazı projelerin içerisinde README dosyasında ekran görüntüleri bulunuyor, bazılarında ise demo linkleri mevcut.
                    Detaylar için proje sayfalarını inceleyebilirsin.
                </p>
            </div>
        </>
    )
}
