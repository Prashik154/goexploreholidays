import { guides } from '@/app/utils/data';
import Image from 'next/image';

export function GuideProfiles() {
  return (
    <div className="space-y-8 mb-16">
      <h3 className="text-2xl font-bold">Our Expert Guides</h3>
      <p className="text-gray-600 max-w-3xl">
        Meet the naturalists who will bring the jungle to life with their deep knowledge and tracking skills.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <div key={guide.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative h-48 sm:h-auto">
                {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" /> */}
                <Image src="/images/guides/Founder.jpg" alt='guide' width={4} height={4} className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <div className="sm:w-2/3 p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg">{guide.name}</h4>
                    <p className="text-gray-600">{guide.experience} years experience</p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                    {guide.specialty}
                  </span>
                </div>
                
                <p className="my-3 text-gray-700">{guide.bio}</p>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map(lang => (
                      <span key={lang} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}