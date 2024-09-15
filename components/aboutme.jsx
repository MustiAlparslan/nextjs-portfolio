import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Aboutme() {
    return (
        <div className="mt-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Hakkımda</h2>
            <p className="text-lg text-gray-400">
                <Typewriter
                    words={["2 yılı aşkın süredir front-end geliştirme alanında çalışıyorum. Genellikle React ile çalışıyorum, ancak aynı zamanda React Native, Vue.js ve backend tarafında Node.js (Express JS) ile becerilerimi geliştiriyorum."]}
                    loop={1} 
                    cursor
                    cursorStyle="|"
                    typeSpeed={25} 
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
        </div>
    );
}

export default Aboutme;
