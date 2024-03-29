import React from 'react';
import appointment from "../../assets/images/appointment.png";
import PrimatyButton from '../Shared/PrimatyButton';
const Contact = () => {
    return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <div>
              <p class="text-xl font-bold text-cyan-500"> Contact us</p>
              <h2 class=" text-center text-3xl font-bold text-white">Say Contact With us</h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="appearance-none relative block w-full px-3 py-2 bg-white  text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class=" mt-3  appearance-none relative block w-full px-3 py-2 bg-white  text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div className="">
                  <textarea
                    class="textarea mt-3  appearance-none relative block w-full px-3 py-5 bg-white  text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Messages"
                  ></textarea>
                </div>
              </div>
              <div>
                <PrimatyButton>Contact</PrimatyButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;