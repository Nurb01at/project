const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    },
    //-------------------------третяя задача---------------------------------------------
    showAgeAndLangs(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let result = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang){
            result += `${lang.toUpperCase()} `;
        });
        console.log(result)
    }
}
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// -----------------------------Первая задача-------------------------------------------------------
// function showExperience(plan) {
//    const {exp} = plan.skills
//    console.log(exp)
//    return exp
// }
// showExperience(personalPlanPeter)
// ----------------------------------Вторая задача--------------------------------------
// function showProgrammingLangs(plan) {
//     let proLang = ''
//     const {programmingLangs} = plan.skills
//     for (let key in programmingLangs){
//         proLang += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     console.log(proLang)
//     return proLang
// }
// showProgrammingLangs(personalPlanPeter)
// ------------------------------------------------------------------------
