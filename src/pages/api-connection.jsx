import Link from "next/link";
import CopyToClipboard from "@/Components/Copy";

const Api = () => {
  return (
    <main className="w-full pt-20 ">
      <main className="w-full bg-color-bg_primary-500">
        <main className="flex w-full flex-col">
          <section className="pb-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="space-y-8 pt-10 text-center md:pt-20 ">
                <h1 className="text-2xl font-extrabold md:text-4xl">For developers</h1>
                <p className="mx-auto max-w-2xl md:text-xl">
                  This is the section with API documentation for connecting your
                  service to SMS-Man and automatic number purchasing.
                </p>
                <div className="mx-auto flex flex-col space-y-4 w-full items-center justify-between text-center md:space-y-0 md:space-x-4 md:max-w-2xl lg:max-w-4xl  md:flex-row">
                  <button className="text-[1rem] flex items-center w-2/3 justify-center rounded-xl bg-color-white px-10 py-6 text-center font-bold text-color-primary_black hover:bg-color-primary_black hover:text-white md:w-1/3">
                    Compatible API
                  </button>
                  <button className="flex w-2/3 items-center justify-center rounded-xl text-color-white px-10 py-6 text-center font-bold bg-color-primary_black transition md:w-1/3">
                    API 2.0
                  </button>
                  <button className="flex w-2/3 items-center justify-center rounded-xl bg-color-white px-10 py-6 text-center font-bold text-color-primary_black hover:bg-color-primary_black hover:text-white md:w-1/3">
                    Rent API
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-color-white py-16 md:py-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="md:flex md:justify-between md:px-8 md:mx-auto md:items-start">
                <aside className="sticky-top sticky hidden max-w-[20rem] flex-1 lg:block">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#desc" className="text-color-primary">
                        API Protocol Description
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_1" className="text-color-primary">
                        Balance request
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_2" className="text-color-primary">
                        Get limits
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_3" className="text-color-primary">
                        Request a phone number
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_4" className="text-color-primary">
                        Get sms
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_5" className="text-color-primary">
                        Change request status
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_6" className="text-color-primary">
                        Request for the amount of available numbers
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_7" className="text-color-primary">
                        Get list of all countries
                      </Link>
                    </li>
                    <li>
                      <Link href="#point_8" className="text-color-primary">
                        Get list of all services
                      </Link>
                    </li>
                  </ul>
                </aside>
                <div className="space-y-4 px-4 md:px-0 lg:px-12 md:flex-1">
                  <h2 className="text-2xl font-extrabold text-center md:text-3xl md:text-left">API v2.0</h2>
                  <p className="text-sm md:text-base">
                    API is a protocol of interaction between your software and
                    our activation server. The API is needed in order to
                    automate the process of receiving SMS messages on your side
                    To work with the API, you must use your API key, you can get
                    it by going to the profile page. Our software is fully
                    compatible with competitor sites
                  </p>
                  <h3 id="desc" className="text-xl font-extrabold text-center md:text-left">
                    API Protocol Description
                  </h3>
                  <p className="text-sm md:text-base">
                    All requests should go to POST or GET request. All requests
                    must have an API key in the form of the token parameter{" "}
                  </p>
                  <h3 id="point_1" className="text-xl font-extrabold text-center md:text-left">
                    Balance request
                  </h3>
                  <p className="space-x-4">
                    <Link href="/" className="text-color-api-red text-sm md:text-base">
                      http://api.sms-man.com/control/get-balance?token=$token
                    </Link>
                    <CopyToClipboard textToCopy="http://api.sms-man.com/control/get-balance?token=$token">
                      <button>Copy</button>
                    </CopyToClipboard>
                  </p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>"balanc799.70"</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some textx</strong>
                    </div>
                  </div>
                  <h3 id="point_2" className="text-xl font-extrabold text-center md:text-left">
                    Get limits
                  </h3>
                  <p>
                   some wierd link
                  </p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            country_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Number country
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            application_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Number Service
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_3" className="text-xl font-extrabold text-center md:text-left">
                    Request a phone number
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            country_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Number country
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            application_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Number Service
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            ref
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Pass the referral ID
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_4" className="text-xl font-extrabold text-center md:text-left">
                    Get sms
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            request_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Request ID
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_5" className="text-xl font-extrabold text-center md:text-left">
                    Change request status
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            request_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Request ID
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            status
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            ready / close / reject / used
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_6" className="text-xl font-extrabold text-center md:text-left">
                    Request for the amount of available numbers
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            country_id
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Integer
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            no
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Number country
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_7" className="text-xl font-extrabold text-center md:text-left">
                    Get list of all countries
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                  <h3 id="point_8" className="text-xl font-extrabold text-center md:text-left">
                    Get list of all services
                  </h3>
                  <p>link</p>
                  <h4 className="font-extrabold text-center md:text-left">Parameters</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <table className="api-table w-full table-fixed text-left">
                      <thead>
                        <tr>
                          <th className="pb-2">Field</th>
                          <th className="pb-2">Type</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t border-color-border_light py-1">
                            token
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            String
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            yes
                          </td>
                          <td className="border-t border-color-border_light py-1">
                            Your API key
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Result</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>The result</strong>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-center md:text-left">Possible errors</h4>
                  <div className="api-box rounded-xl border border-[#dbebff] bg-color-bg_light">
                    <div>
                      <strong>some errors</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </main>
  );
};

export default Api;
