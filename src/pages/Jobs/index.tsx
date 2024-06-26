import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import JobCard from "./fragments/JobCard"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import { apiGetAllJobsAdmin } from "src/services/JobService"
import { IJob } from "src/interfaces"


const Jobs = () => {
    const { user, isLoggedIn } = useAuthContext()
    const { data } = useFetch<IJob[]>({
      api: apiGetAllJobsAdmin,
      key: ["jobs"],
      enabled: !!isLoggedIn
    })

 
    // console.log({data, user})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Job Layout</h1>
            <div className="flex flex-end">
              <Link to={"/jobs/add"}>Add Job</Link>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {
                data?.map((job: IJob) => (
                  <JobCard key={job?.id} job={job} />
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

export default Jobs
