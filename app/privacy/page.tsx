import Image from 'next/image';
import Link from 'next/link';

import Footer from 'components/home/footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col mx-auto w-full homepage lex after:bg-grid sm:max-w-4xl pt-5 h-fit px-4">
      <header className="flex justify-between items-center">
        <h1 className="font-medium tracking-tight text-lg flex items-center">
          <Link
            className="flex text-primary items-center active:opacity-80"
            href="/"
          >
            <Image
              src="/icons/icon.svg"
              width={44}
              height={44}
              alt="Bookmark it"
              className="mr-2 "
              priority
            />
            Bookmark It.
          </Link>
        </h1>
      </header>
      <main className="w-full flex flex-col px-2 my-6">
        <h2 className="font-semibold text-xl my-2">Privacy Policy</h2>
        <p className="my-1 leading-7">
          bmrk.cc (&quot;bmrk.cc&quot;, &quot;we&quot;, &quot;us&quot;, and/or
          &quot;our&quot;) built the Bookmark It. app as a Freemium app. This
          SERVICE is provided at no cost and is intended for use as is.
        </p>
        <p className="my-1 leading-7">
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </p>
        <p className="my-1 leading-7">
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p className="my-1 leading-7">
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which are accessible at Bookmark It. unless
          otherwise defined in this Privacy Policy.
        </p>
        <h3 className="font-semibold text-lg my-2">
          Information Collection and Use
        </h3>
        <p className="my-1 leading-7">
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information, including
          but not limited to Email Id, Profile Photo and Full name via Google
          OAuth Login by you. We do not use third-party cookies on our Site.
        </p>
        <h3 className="font-semibold text-lg my-2">Log Data</h3>
        <p className="my-1 leading-7">
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third-party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </p>
        <h3 className="font-semibold text-lg my-2">Service Providers</h3>
        <p className="my-1 leading-7">
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul className="px-6 my-1 list-decimal leading-7">
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p className="my-1 leading-7">
          I want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <h3 className="font-semibold text-lg my-2">Security</h3>
        <p className="my-1 leading-7">
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </p>
        <h3 className="font-semibold text-lg my-2">Links to Other Sites</h3>
        <p className="my-1 leading-7">
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h3 className="font-semibold text-lg my-2">Children’s Privacy</h3>
        <div>
          <p className="my-1 leading-7">
            I do not knowingly collect personally identifiable information from
            children. I encourage all children to never submit any personally
            identifiable information through the Application and/or Services. I
            encourage parents and legal guardians to monitor their children{"'"}
            s Internet usage and to help enforce this Policy by instructing
            their children never to provide personally identifiable information
            through the Application and/or Services without their permission. If
            you have reason to believe that a child has provided personally
            identifiable information to us through the Application and/or
            Services, please contact us. You must also be at least 16 years of
            age to consent to the processing of your personally identifiable
            information in your country (in some countries we may allow your
            parent or guardian to do so on your behalf).
          </p>
        </div>
        <h3 className="font-semibold text-lg my-2">
          Changes to This Privacy Policy
        </h3>
        <p className="my-1 leading-7">
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p className="my-1 leading-7">
          This policy is effective as of{' '}
          <span className="font-medium">2024-02-11</span>.
        </p>
        <h3 className="font-semibold text-lg my-2">Contact Us</h3>
        <p className="my-1 leading-7">
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at{' '}
          <a
            className="cursor-pointer text-blue-700 underline"
            href="mailto:support@bmrk.cc"
          >
            support@bmrk.cc
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
