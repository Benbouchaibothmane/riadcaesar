import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16">
      <h2 className="text-3xl font-serif mb-8">Location</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0297245645396!2d-7.989361684885272!3d31.631045981330437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee43ad6ec61d%3A0x57139917f3c58cd0!2sMedina%2C%20Marrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-rose-600" />
                Medina, Marrakech, Morocco
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-rose-600" />
                  +212 524 000 000
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2 text-rose-600" />
                  info@riadcaesar.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Getting Here</h3>
              <p className="text-gray-600">
                Located in the heart of the Medina, Riad Caesar is easily accessible from Marrakech Menara Airport (RAK). 
                We offer airport transfers and can arrange guided tours of the Medina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}