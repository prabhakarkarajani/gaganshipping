import Layout from '../components/layout'
export default function IndexPage() {
  return (
    <Layout>
      {/* banner */}
      <div class="max-w-sm w-full lg:max-w-full ">
        <div class="flex h-full w-full overflow-hidden h-screen">
          <div class="w-3/5 p-2 bg-white-400  align-middle pt-40 relative">
            <div class="text-3xl pl-20 font-thin  text-center text-gray-600 pt-40  tracking-wide">
              A Unique Service Offering
              <br />
              <span class="text-indigo-600 pl-2 text-5xl font-bold pt-3 tracking-wider" > Speed and Reliability.</span>
            </div>
            <svg class="hidden lg:block absolute items-center right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div class="w-3/5 custimg bg-blue-500  h-full text-center bg-fixed">

            {/* <img src={'https://images.unsplash.com/photo-1595900604598-4667e6437839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} class="object-cover h-full" /> */}
          </div>
        </div>
        {/* banner footer */}
        <div class="bg-indigo-600 text-center py-4 lg:px-4">
          <div class="p-2 bg-indigo-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
            <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
          </div>
        </div>
        {/* card item */}

        <div class="text-xl italic text-center w-full font-thin text-gray-600 pt-20">
          <span class="text-indigo-600 pl-2 text-4xl font-bold pt-3  not-italic uppercase tracking-widest" > Service</span>
          <br />
            "Good customer service costs less than bad customer service."
        </div>
        <div class="flex flex-wrap p-10 pl-20 pr-20 pt-20 font-thin">
          <div class="w-1/3 item-center ml-auto text-center">
            <img src={'../images/projects.png'} class="block m-auto w-24" />
            <div class="text-xl uppercase text-gray-700 tracking-wider font-semibold">Ship agency</div>
            <p class="leading-relaxed pt-2 pl-10 pr-10 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="w-1/3 item-center ml-auto text-center">
            <img src={'../images/projects.png'} class="block m-auto w-24" />
            <div class="text-xl uppercase text-gray-700 tracking-wider font-semibold">Personal Mangement</div>
            <p class="leading-relaxed pt-2 pl-10 pr-10 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="w-1/3 item-center ml-auto text-center">
            <img src={'../images/projects.png'} class="block m-auto w-24" />
            <div class="text-xl uppercase text-gray-700 tracking-wider font-semibold">Project</div>
            <p class="leading-relaxed pt-2 pl-10 pr-10 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        {/* whow we are */}
        <div class="text-xl italic text-center w-full font-thin text-gray-600 p-40">
          <span class="text-indigo-600 pl-2 text-4xl font-bold pt-3  not-italic uppercase tracking-widest" > who we are</span>
          <br />
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </div>
      </div>
    </Layout>

  )
}
