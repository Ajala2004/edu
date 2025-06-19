import HeroSection from './hero';
import React, { useState } from 'react';
import './sub.css';
import { FaChevronDown, FaChevronUp,FaStar } from 'react-icons/fa';


const faqData = [
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept most major payment methods including credit/debit cards, PayPal, and wallet transfers. Check your payment page for a full list of supported methods.',
    },
    {
        question: 'Can I access my subscription on any device?',
        answer: 'Yes, your subscription is accessible on any device through your account settings. Please note that simultaneous logins may be limited based on your plan.',
    },
    {
        question: 'Are there any additional costs or hidden fees?',
        answer: 'No hidden fees whatsoever. All costs are clearly stated at the subscription stage. Optional add-ons are available separately and clearly marked.',
    },
    {
        question: 'Do you offer discounts for personal referrals?',
        answer: 'Yes! If you refer a friend, you’ll receive a discount on your next renewal once they register using your referral link.',
    },
    {
        question: 'How can I upgrade or downgrade my subscription plan?',
        answer: 'You can manage and change your subscription plan at any time through your account settings. Plan switches take effect at the beginning of your next billing cycle.',
    },
    {
        question: 'Is my payment information secure?',
        answer: 'Yes. We use industry-standard encryption and secure payment gateways to process your payments and store no sensitive data on our own servers.',
    },
];

const steps = [
    {
        number: 1,
        title: 'Web3 mlhm proceduralize reveal #1',
        description: 'Micro SaaS tool with smart messaging. Message-driven web3 SaaS messaging tool with blockchain-based identity profiles.',
    },
    {
        number: 2,
        title: 'Price point & flexible gated reality news react. Advertising.',
        description: 'Activate open conversational cloud SaaS tool to enhance UX flow. Filtered activation loops with AI for user data trust.',
    },
    {
        number: 3,
        title: 'Performance logs mean easier inclusion outcomes. Optimized.',
        description: 'Subscription cloud for remote data log integration. Optimize user data tracking funnels for key workflows.',
    },
    {
        number: 4,
        title: 'Revision memory plant boom synth focus out. It claims claim.',
        description: 'Cryptex SaaS conversion filter, including message metrics for multi-wallet targeting and AI performance funnels. Easy to rotate key token signals.',
    },
];

const plans = [
    {
        title: 'Trial',
        price: '$0',
        billed: '',
        features: ['1 Lesson', 'Pay as you go', 'No commitment'],
        button: 'Sign up (Free)',
        recommended: false,
    },
    {
        title: 'Monthly',
        price: '$81',
        billed: '/MO',
        features: ['8 Lessons', 'Online Duration', 'Flexible Schedule', 'Choose a Tutor'],
        button: 'Sign up',
        recommended: false,
    },
    {
        title: 'Bi-Monthly',
        price: '$162',
        billed: '/2MO',
        features: ['16 Lessons', 'Online Duration', 'Flexible Schedule', 'Flexible Reschedule', 'Choose a Tutor'],
        button: 'Sign up',
        recommended: true,
    },
    {
        title: 'Quarterly',
        price: '$182',
        billed: '/3MO',
        features: ['24 Lessons', 'Online Duration', 'Flexible Schedule', 'Flexible Reschedule', 'Choose a Tutor'],
        button: 'Sign up',
        recommended: false,
    },
];

const PricingPlans = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <HeroSection />
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2>Select Class Duration</h2>
                    <span className="class-count">33 Minutes</span>
                </div>

                
                <div className="plans">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`plan-card ${plan.recommended ? 'recommended' : ''}`}
                        >
                            {plan.recommended && <div className="tag">Recommended</div>}
                            <h3>{plan.title}</h3>
                            <p className="price">
                                {plan.price} <span>{plan.billed}</span>
                            </p>
                            <ul>
                                {plan.features.map((item, idx) => (
                                    <li key={idx}>✔️ {item}</li>
                                ))}
                            </ul>
                            <button className="btn">{plan.button}</button>
                        </div>
                    ))}
                </div>
            </div>

            <section className="subscription-section">
                <h2>How Subscription Works</h2>
                <div className="steps">
                    {steps.map((step) => (
                        <div key={step.number} className="step-card">
                            <div className="step-circle">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq-section">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div
                                className="faq-question"
                                onClick={() => toggleIndex(index)}
                            >
                                <span>{item.question}</span>
                                <div className="icon">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="slider">
                    <div className="slide">
                        <div className="slide-content">
                            <div className="quote-mark">❝</div>
                            <p>
                                These teen groups help a first series, famous educational social learning student learn everything they need to know about their subject matter and more, including problem-solving skills.
                            </p>
                            <p className="testimonial-source">~ Feature post ~</p>
                            <div className="author-section">
                                <img
                                    src="https://via.placeholder.com/50" // Placeholder image
                                    alt="Author"
                                    className="author-image"
                                />
                                <div className="author-details">
                                    <p className="author-name">Jane Cooper</p>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="star" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="quote-mark right">❞</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPlans;