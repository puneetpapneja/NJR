export const API_URL = "http://localhost:5000/";

export const JOB_SEEKER ="Job Seeker"
export const JOB_RECRUITER ="Job Recruiter"

export const  SEEKER_MENU = [
    {
        path: "/Dashboard",
        name: "Home"
    },
    {
        path: "/jobs",
        name: "Jobs"
    },
    {
        path: "/Appliedjobs",
        name: "AppliedJob"
    },

]

export const RECRUITER_MENU = [
    {
        path: "/Dashboard",
        name: "Home"
    },
    {
        path: "/Postjob",
        name: "PostJob"
    },
    {
        path: "/Postedjob",
        name: "PostedJob"
    }
]

export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };