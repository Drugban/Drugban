const resumeAboutBtn = document.getElementById('resume-about-btn')
const resumeAbout = document.getElementById('resume-about')
const resumeSkillsBtn = document.getElementById('resume-skills-btn')
const resumeSkills = document.getElementById('resume-skills')
resumeAboutBtn.addEventListener('click', () => {
	if ((resumeSkills.classList = 'd-block')) {
		resumeSkills.classList.remove('d-block')
		resumeSkills.classList.add('d-none')
	}
	localStorage.getItem('SkillsVisible')
	resumeAbout.classList.add('d-block')
	resumeAbout.classList.remove('d-none')
})

resumeSkillsBtn.addEventListener('click', () => {
	if ((resumeAbout.classList = 'd-block')) {
		resumeAbout.classList.remove('d-block')
		resumeAbout.classList.add('d-none')
	}
	resumeSkills.classList.add('d-block')
	resumeSkills.classList.remove('d-none')
})
