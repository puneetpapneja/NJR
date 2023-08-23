export const API_URL = "http://localhost:5000/";

export const JOB_SEEKER ="Job Seeker"
export const JOB_RECRUITER ="Job Recruiter"

export const  SEEKER_MENU = [
    {
        path: "/Dashboard",
        name: "Home"
    },
    {
        path: "/Jobs",
        name: "Jobs"
    },
    {
        path: "/JobsApplied",
        name: "Applied Jobs"
    },

]

export const RECRUITER_MENU = [
    {
        path: "/Dashboard",
        name: "Home"
    },
    {
        path: "/PostJob",
        name: "Post Job"
    },
    {
        path: "/PostedJobs",
        name: "Posted Jobs"
    }
]

export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };