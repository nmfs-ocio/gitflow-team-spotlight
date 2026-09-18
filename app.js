document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('team-grid');
    
    // Clear any existing content
    grid.innerHTML = '';
    
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        // Using glass-panel-float and standardizing dark mode borders/text
        card.className = 'glass-panel-float rounded-xl overflow-hidden border border-white/20 dark:border-brand-primary/30 relative';
        
        card.innerHTML = `
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-primary"></div>
            <div class="p-6 h-full flex flex-col">
                <div class="flex items-center gap-4 mb-4">
                    <img src="${member.avatar}" alt="${member.name}" class="h-16 w-16 rounded-full border-2 border-brand-secondary dark:border-brand-primary object-cover shadow-sm bg-white dark:bg-brand-slate">
                    <div>
                        <h3 class="text-xl font-display font-bold text-brand-slate dark:text-brand-light">${member.name}</h3>
                        <p class="text-brand-primary dark:text-brand-secondary font-medium text-sm flex items-center gap-1">
                            <i data-lucide="briefcase" class="w-4 h-4"></i>
                            ${member.role}
                        </p>
                    </div>
                </div>
                <p class="text-brand-slate/80 dark:text-brand-light/70 text-sm mb-4 flex-grow leading-relaxed">${member.bio}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/20 dark:text-brand-secondary border border-brand-primary/10 dark:border-brand-secondary/20">
                        <i data-lucide="code" class="w-3 h-3"></i>
                        ${member.favoriteTech}
                    </span>
                </div>
                <div class="pt-4 border-t border-brand-slate/10 dark:border-brand-light/10">
                    <a href="https://github.com/${member.github}" target="_blank" class="text-sm font-medium text-brand-slate/60 dark:text-brand-light/60 hover:text-brand-secondary dark:hover:text-brand-secondary transition-colors flex items-center gap-2">
                        <i data-lucide="github" class="w-4 h-4"></i>
                        @${member.github}
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Initialize Lucide icons
    lucide.createIcons();
});
