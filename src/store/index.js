import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      activeDropdownId: null,

      phishingDocs: [
        {
          id: 'p1',
          title: 'What is Phishing?',
          graphs: [
            'Phishing is a type of online scam where attackers pose as trustworthy entities to trick you into sharing sensitive information. They typically do this through emails, messages, or websites that appear genuine but are designed to steal your data.',

            'Phishing attempts often come with urgent requests, such as claiming your account is compromised or offering attractive deals to lure you in.'
          ]
        },

        {
          id:'p2',
          title: 'How Phishing works',
          graphs: [
            '1.The Bait: Phishers use cunning tactics to grab your attention. They may impersonate your bank, favourite online store, or even social media platforms, making you believe the communication is legitimate.',

            "2.The Hook: Once they've piqued your interest, they prompt you to click on a link that leads to a fake website resembling the real one. This website will ask you to enter personal information, login credentials, or financial data.",

            '3.The Catch: Unknowingly, you share sensitive data with the scammers, giving them access to your accounts, and leaving you vulnerable to identity theft and financial losses.'
          ]
        },

        {
          id:'p3',
          title: 'Why is Phising Dangerous?',
          graphs: [
            'Identity Theft: Your personal information, such as name, address, social security number, and bank details, can be stolen and misused.',

            'Financial Loss: Phishers may access your bank accounts, credit cards, and other financial services, leading to unauthorized transactions and draining your funds.',

            'Compromised Accounts: They can take over your social media or email accounts, using them to target your contacts or spread malicious content.'
          ]
        },

        {
          id:'p4',
          title: 'How to Protect Yourself Against Phishing',
          graphs: [
            '1.Stay Informed: Educate yourself about phishing techniques, staying up-to-date with the latest scams and warning signs.',

            "2.Be Wary of Unsolicited Messages: If you receive emails, texts, or direct messages from unknown sources, be cautious. Do not click on links or download attachments without verifying the sender's identity.",

            '4.Verify Suspicious Links with Our Web App: As an additional measure, utilize our web app equipped with a well-trained machine learning model to detect phishing URLs. Our advanced technology can analyze URLs and determine whether they are potentially phishing links or safe websites. By verifying links through the app, you can further safeguard yourself against phishing attacks.',

            '5.Use Multi-Factor Authentication (MFA): Enable MFA whenever possible. This adds an extra layer of security, making it harder for scammers to access your accounts.',

            '6.Keep Software Updated: Ensure your operating system, antivirus, and web browser are regularly updated to stay protected against known vulnerabilities.',

            "7.Don't Share Personal Information: Legitimate organizations will never ask for sensitive information via email or text. Avoid sharing personal data unless you're absolutely sure of the recipient's identity.",

            "Report Suspicious Activity: If you come across a potential phishing attempt, report it to your email provider or the website's administrators. Additionally, notify us through the web app to help improve our system and protect other users from similar threats."
          ]
        }
      ]
    }
  },
  getters: {
    phishingDocs(state){
      return state.phishingDocs
    }
  },
  mutations: {
    setActiveDropdown(state, id) {
      state.activeDropdownId = id;
    },
    clearActiveDropdown(state) {
      state.activeDropdownId = null;
    },
  },
  
  actions: {
  },
  modules: {
  }
})
