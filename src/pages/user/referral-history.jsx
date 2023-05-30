import UserDashboardLayout from "@/Components/UserDashboardLayout";
import ReferralHistory from "@/Components/a-component-test/ReferralHistory"

 
 const referralHistory = () => {
   return (
     <div>
       <ReferralHistory />
     </div>
   )
 }
 
 export default referralHistory

 referralHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
 