import React from 'react';
import { Sparkles, Award, UserCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/salonData';

interface MeetTheExpertsProps {
  onSelectExpertToBook: (expertName: string) => void;
}

export const MeetTheExperts: React.FC<MeetTheExpertsProps> = ({
  onSelectExpertToBook,
}) => {
  return (
    <section id="experts" className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Master Artisans
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            Artistry in <span className="italic text-[#C5A572]">Every Detail</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            Our atelier brings together specialists devoted to precision, continuous European masterclass education, and individualized guest care.
          </p>

          {/* Explicit Demo Notice Pill */}
          <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9DDD1]/60 border border-[#C5A572]/30 text-[10px] uppercase tracking-wider text-[#28201D]/80">
            <UserCheck className="w-3 h-3 text-[#C5A572]" />
            <span>Client Demo Notice: Team profiles are customizable for your atelier staff</span>
          </div>
        </div>

        {/* 3 Fictional Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group bg-white border border-[#E9DDD1] hover:border-[#C5A572] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9DDD1]/40">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-[#F8F4EF]/90 backdrop-blur-sm text-[#28201D] text-[10px] uppercase tracking-widest px-2.5 py-1 border border-[#C5A572]/30 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#C5A572]" />
                  <span>{member.experience}</span>
                </div>

                {/* Name Overlay in Image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="font-serif text-2xl font-light tracking-wide">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C5A572] font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Biography and Specialties */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#28201D]/80 font-light leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-6">
                    <span className="block text-[10px] uppercase tracking-wider text-[#28201D]/60 mb-2">
                      Key Specialties
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 bg-[#F8F4EF] border border-[#E9DDD1] text-[11px] text-[#28201D]/80 font-light"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book with this specialist */}
                <div className="pt-4 border-t border-[#E9DDD1] flex items-center justify-between">
                  <button
                    onClick={() => onSelectExpertToBook(member.name)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#28201D] hover:text-[#C5A572] transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#C5A572]" />
                    <span>Request with {member.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
