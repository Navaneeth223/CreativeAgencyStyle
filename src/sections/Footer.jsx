import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-20 min-h-[50vh] flex flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="mb-10 md:mb-0">
                    <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight" data-cursor="hover">
                        LET'S <br /> CREATE.
                    </h2>
                </div>

                <div className="flex flex-col gap-6 text-right md:-mt-4">
                    <a href="#" className="text-xl md:text-2xl font-sans hover:text-accent transition-colors duration-300" data-cursor="hover">hello@agency.com</a>
                    <a href="#" className="text-xl md:text-2xl font-sans hover:text-accent transition-colors duration-300" data-cursor="hover">+1 (555) 000-0000</a>

                    <div className="flex gap-4 justify-end mt-4">
                        {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                            <a key={social} href="#" className="text-sm border border-secondary/20 px-4 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" data-cursor="hover">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-secondary/40 font-sans tracking-widest mt-20">
                <span>© 2026 CREATIVE AGENCY. ALL RIGHTS RESERVED.</span>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS OF SERVICE</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
