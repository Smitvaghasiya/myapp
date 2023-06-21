const AllFaculty = ()=>{

    var faculties = [
        {
            FacultyName: 'Dr.GopiSanghani', 
            FacultyDesignation :'Dean-SchoolofComputerScience', 
            FacultyEducation :'Ph.D.,M.E.(CE)', 
            FacultyExperience : '22+Years', 
            FacultyWorkingSince : 'Jul-2012'
        },
        {
            FacultyName: 'Dr.NileshGambhava', 
            FacultyDesignation :'Professor', 
            FacultyEducation :'Ph.D.,M.E.(CE)', 
            FacultyExperience : '20+Years', 
            FacultyWorkingSince : 'Jul-2002'
        },
        {
            FacultyName: 'Dr.PradyumansinhJadeja', 
            FacultyDesignation :'AssociateProfessor', 
            FacultyEducation :'Ph.D.,M.E.(CE)', 
            FacultyExperience : '17+Years', 
            FacultyWorkingSince : 'Jul-2009'
        },
        {
            FacultyName: 'Prof.MaulikTrivedi', 
            FacultyDesignation :'AssistantProfessor', 
            FacultyEducation :'BE(CE),M.Tech.(CSE),Ph.D.(Pursuing)', 
            FacultyExperience : '14+Years', 
            FacultyWorkingSince : 'Jun-2009'
        },
        {
            FacultyName: 'Prof.DixitaKagathara', 
            FacultyDesignation :'AssistantProfessor', 
            FacultyEducation :'M.Tech.(WebTechnology)', 
            FacultyExperience : '13+Years', 
            FacultyWorkingSince : 'Jul-2009'
        },
        {
            FacultyName: 'Prof.SwatiSharma', 
            FacultyDesignation :'AssistantProfessor', 
            FacultyEducation :'M.Tech.(CSE)', 
            FacultyExperience : '14+Years', 
            FacultyWorkingSince : 'May-2013'
        }
    ];

    const formatedFac = faculties.map((fac)=>{
        return <h5>{fac.FacultyName}</h5>
    });

    return formatedFac;
}

export {AllFaculty};