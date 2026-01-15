
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Scatter, ScatterChart, ZAxis } from 'recharts';
import { MILESTONES, COLORS } from '../constants';

const LoveTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Graph of Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "A visual representation of how our love has only deepened with every passing season."
          </p>
        </div>

        <div className="h-[400px] w-full mb-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MILESTONES}>
              <defs>
                <linearGradient id="colorLove" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.accent} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#999', fontSize: 12}}
                dy={10}
              />
              <YAxis hide domain={[0, 110]} />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                itemStyle={{color: COLORS.accent, fontWeight: 'bold'}}
              />
              <Area 
                type="monotone" 
                dataKey="intensity" 
                name="Love Level"
                stroke={COLORS.accent} 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorLove)" 
                animationDuration={2500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MILESTONES.map((m, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-[#fffafb] border border-rose-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-3xl font-serif text-rose-200 group-hover:text-rose-400 transition-colors font-bold block mb-2">{m.year}</span>
              <h3 className="text-xl font-bold mb-3">{m.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;
