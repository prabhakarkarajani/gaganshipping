import React from 'react';
import Layout from '../components/newlayout'
export default function About() {
    return (
        <React.Fragment>
            <Layout>
                <div className="banner1">
                    <img src="https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" height="500" />
                    <div className="banner_title">
                        <h1 className="p-4">An India’s leading shipping company</h1>
                        <span className="p-2">A name with a reputation in the shipping agency and it’s allied businesses</span>
                    </div>
                </div>
                <section className="m-20">
                    <div className="features">
                        <h2 className="mb-10 uppercase">GAGAN SHIPPING SERVICES</h2>
                        <p>
                            " Whether you're a vessel Owner/Disponent Owners/ Operator looking for quality shipping services, a market leader in need of a most competitive, timely and reliable services, or in a line of marine operations seeking world-class support services, think GSS."
                         </p>

                        <p className="article_par">
                            A name with a reputation in the shipping agency and it’s allied businesses.
                            This company has established by a qualified person in the shipping industry besides served over three decades in an India’s leading shipping company serving the nation globally with over 100 years.
                         </p>
                        <p className="article_par">
                            <b>GSS</b> a hallmark of the company is the ability to keep to its professional commitments and the reliability it has towards the global shipping industry.      The founder leadership style is based on a  hands-on experience  with MBA in Shipping & Port Management, Member in Narottam Morarjee Institute of Shipping, Mumbai and also holding a Rule 8 Certificate to act as  ‘Customs House Agent’ issued by  Indian Customs.
                         </p>
                        <p className="article_par">
                            With years of strong presence in the Indian market, equipped with professionals &amp; expertise <b>GSS</b> is able to traverse a steep growth graph in terms of volumes of businesses. A pure professional in action when it comes to finding solutions for your vessels movements, we extend our services and ensure safe handling of your Dry Bulk/Break Bulk/General Cargo and Containerised Cargoes.
                         </p>
                        <p className="article_par pb-40">
                            We at <b>GSS</b> believe in commitment to our customers in terms of services and our mission is to go that extra mile to ensure cent percent customer satisfaction
                         </p>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}