const Api = () => {
  return (
    <main className="w-full pt-20 ">
      <main className="w-full bg-color-bg_primary-500">
        <main className="flex w-full flex-col">
          <section className="pb-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="space-y-8 pt-20 text-center">
                <h1 className="text-4xl font-extrabold">For developers</h1>
                <p className="mx-auto max-w-2xl text-xl">
                  This is the section with API documentation for connecting your
                  service to SMS-Man and automatic number purchasing.
                </p>
                <div className="mx-auto flex w-full max-w-4xl items-center justify-between space-x-4 text-center">
                  <button className="flex w-1/3 items-center justify-center rounded-xl bg-color-white px-10 py-6 text-center font-bold text-color-primary_black hover:bg-color-primary_black hover:text-white">
                    Compatible API
                  </button>
                  <button className="flex w-1/3 items-center justify-center rounded-xl bg-color-white px-10 py-6 text-center font-bold text-color-primary_black transition hover:bg-color-primary_black hover:text-white">
                    API 2.0
                  </button>
                  <button className="flex w-1/3 items-center justify-center rounded-xl bg-color-white px-10 py-6 text-center font-bold text-color-primary_black hover:bg-color-primary_black hover:text-white">
                    Rent API
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-color-white pt-24">
            <div className="mx-auto max-w-7xl px-8">
              <div className="flex items-start justify-between">
                <aside className="sticky hidden max-w-[20rem] flex-1 md:block">
                  <ul>
                    <li className="text-color-primary">
                      API Protocol Description
                    </li>
                    <li className="text-color-primary">Balance request</li>
                    <li className="text-color-primary">Get limits</li>
                    <li className="text-color-primary">Request a phone number</li>
                    <li className="text-color-primary">Get sms</li>
                    <li className="text-color-primary">Change request status</li>
                    <li className="text-color-primary">Request for the amount of available numbers</li>
                    <li className="text-color-primary">Get list of all countries</li>
                    <li className="text-color-primary">Get list of all services</li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </main>
    </main>
  );
};

export default Api;
