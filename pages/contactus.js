import React from 'react';
import Layout from '../components/newlayout';
import _ from 'lodash';


export default function Contact() {

    const [errorObj, setError] = React.useState({
        email: false,
        contact: false,
        inValidEmail: false,
        inValidContact: false
    });
    const [submitted, setSubmitted] = React.useState(false);
    function submitForm(data) {
        fetch('/api/contactus', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
            // res.status === 200 ? setSubmitted(true) : ''
        })
    }
    return (
        <React.Fragment>
            <Layout>
                <div className="banner1" style={{'height': 300}}>
                    <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" height="500" />
                    <div className="banner_title">
                        <h1 className="pl-8 text-left">Contact Us</h1>
                        {/* <span className="p-2">A name with a reputation in the shipping agency and it’s allied businesses</span> */}
                    </div>
                </div>
                {/* <div className="w-full text-center p-10 py-20 text-gray-700">
                    <p className="text-4xl">GAGAN SHIPPING SERVICES</p>
                    <p>
                        Door No: 39-9-9, Tenneti Nagar, Murali Nagar, Visakhapatnam – 530 007
                        <br />
                        Telephone: +91 – 891 – 2540468; Mobile: +91 - 98661 – 05677
                        <br />
                        E-Mail: gaganship@gmail.com

                    </p>
                </div> */}
                <div class="flex w-5/6 m-auto my-10 text-gray-700">
                    <div className="flex-none w-1/2 text-center border-double border-r-2  py-2 m-2 ">
                        <p className="text-4xl">GAGAN SHIPPING SERVICES</p>
                        <p>
                            <span style={{'marginBottm': '5px', 'display': 'inline-block'}}>Door No: 39-9-9, </span>
                            <br />
                            <span style={{'marginBottm': '5px', 'display': 'inline-block'}}>Tenneti Nagar, Murali Nagar,</span> 
                            <br/>
                            <span style={{'marginBottm': '5px', 'display': 'inline-block'}}>Visakhapatnam – 530 007</span>
                        <br />
                        <span style={{'marginBottm': '5px', 'display': 'inline-block'}}>Telephone: +91–891–2540468.</span> <br />
                        <span style={{'marginBottm': '5px', 'display': 'inline-block'}}>Mobile: +91 - 98661 – 05677</span>
                        <p>
                            <span>
                            E-Mail:
                            </span>
                            <span>
                            &nbsp;&nbsp;gagan@gaganship.com, 
                            <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;crew@gaganship.com
                            </span>
                        </p>
                       

                    </p>
                    </div>
                    <div class="flex-none w-1/2 text-gray-700 px-4 py-2 m-2">
                    <p className="text-3xl">CONTACT PERSONS</p>
                    <p className="text-gray-900">
                        <span ><b className="text-lg">G.G.Rao</b> <br/>Mobile:+91-98661–05677 </span>
                        <br/><br/>
                         <span ><b className="text-lg">G. S. P. KUMAR</b> <br/>Mobile:+91-93479-53664</span>
                         <br/><br/>
                        <span ><b className="text-lg">G.KUSHAL VIVEK</b> <br/>Mobile:+91-81434-71234</span>
                        
                    </p>
                    </div>
                </div>
                {/* <div class="flex w-5/6 m-auto my-10">
                    <div className="flex-none w-1/2 text-center border-double border-r-2  py-2 m-2 ">
                        adf
                    </div>
                    <div class="flex-none w-1/2 text-gray-600 px-4 py-2 m-2">

                        <form class="w-full max-w-lg" onSubmit={e => {
                            e.preventDefault();
                            console.log(e);
                            let formValues = {};
                            _.each(e.currentTarget, (field) => {
                                if (field.name) {
                                    formValues[field.name] = field.value;
                                }
                            });
                            const getErrorObj = _.cloneDeep(errorObj);
                            if (formValues.email) {
                                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formValues.email)) {
                                    getErrorObj.inValidEmail = false;
                                } else {
                                    getErrorObj.inValidEmail = true;
                                }
                                getErrorObj.email = false;
                            } else {
                                getErrorObj.email = true;
                                getErrorObj.inValidEmail = false;
                            }

                            if (formValues.contact) {
                                let phoneno = /^\d{10}$/;
                                if (formValues.contact.match(phoneno)) {
                                    getErrorObj.inValidContact = false;
                                } else {
                                    getErrorObj.inValidContact = true;
                                }
                                getErrorObj.contact = false;
                            } else {
                                getErrorObj.contact = true;
                                getErrorObj.inValidContact = false;
                            }
                            console.log(formValues);
                            setError(getErrorObj);

                            const isInvalideForm = _.filter(Object.values(errorObj), (n) => n == true);
                            if (_.isEmpty(isInvalideForm)) {
                                submitForm(formValues)
                            };
                        }}>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Name
      </label>
                                    <input name="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Contact No
      </label>
                                    <input name="contact" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ç" id="grid-contact" type="number" placeholder="Doe" />
                                    {errorObj.contact ? <p class="text-red-500 text-xs italic">Contact number is required.</p> : null}
                                    {errorObj.inValidContact ? <p class="text-red-500 text-xs italic">Please enter 10 digits contact no.</p> : null}
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                                        Email
      </label>
                                    <input name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="youremail@xyz.com" />
                                    {errorObj.email ? <p class="text-red-500 text-xs italic">Email id required</p> : null}
                                    {errorObj.inValidEmail ? <p class="text-red-500 text-xs italic">Please enter valid email.</p> : null}
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-msg">
                                        Drop a line
      </label>
                                    <textarea name="msg" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-msg" type="texts" placeholder="Write your query here" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <button class="w-full mx-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
                                    Submit
</button>
                            </div>
                        </form>
                    </div>
                </div> */}

            </Layout>
        </React.Fragment>
    )
}