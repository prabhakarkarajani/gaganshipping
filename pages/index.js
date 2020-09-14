import React from 'react';
import Layout from '../components/newlayout';
export default function IndexPage() {
  return (
    <Layout>
      {/* Banner */}
      <div className="banner">
        <img src="https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" height="500" />
        <div className="banner_title">
          <h1>A Unique Service Offering</h1>
          <span>The most competitive, timely and reliable services.</span>
        </div>
      </div>
      <section className="section m-20">
        <div className="features">
          <h2 className="mb-10 uppercase">Who We Are</h2>
          <p>
            " A name with a reputation in the shipping agency and it’s allied businesses.
            This company has established by a qualified person in the shipping industry
            besides served over three decades in an India’s leading shipping company serving
            the nation globally with over 100 years."
          </p>
        </div>

        <div className="cardsContainer mt-40 flex items-center justify-between flex-wrap">
          <div class="max-w-sm rounded overflow-hidden shadow-lg h-280 min-h-full">
            <img class="w-full" src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="text-xl mb-2 uppercase">CREW HANDLING SERVICES</div>
              <p class="text-base pb-4 text-justify par">
                The personalized attention from the movement of the arrival of the crew members at our airports until the effective boarding passing through the transportation to the port to safely board the vessel for incoming crew. </p>
            </div>


          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg h-280 min-h-full">
            <img class="w-full" src="https://images.unsplash.com/photo-1564035105550-e1f02aa8556b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="text-xl mb-2 uppercase">Port Agency Service</div>
              <p class="text-base pb-4 text-justify par">
                We provide agency services and shipping expertise to local and foreign ship owning, trading, and industry interests. We ensure vessels a fast turnaround, covering bunkering, stores, spares and repairs, cash advances, attending to crew change and timely support of all other required activities with maximum efficiency at appropriate cost.
    </p>
            </div>

          </div>



          <div class="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
            <img class="w-full" src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="text-xl mb-2 uppercase">HUSBANDRY SERVICES</div>
              <p class="text-base pb-4 text-justify par">
                Giving top priority for the time and money are key considerations of masters, owners and operators, our ships supply services operates 24/7 with a standby for emergency response and management support.
    </p>
            </div>

          </div>
        </div>
      </section>

    </Layout>

  )
}
