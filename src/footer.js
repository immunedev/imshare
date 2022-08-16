import React from 'react';


export default function Footer(){
    return(
        <footer class="text-center mt-auto">
          <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
              {/* <div class="flex justify-center space-x-6">
                <a
                  class="text-gray-900 hover:text-opacity-75"
                  href="https://github.com/immunedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div> */}

              <nav
                class="relative flex flex-wrap justify-center gap-8 p-8 text-sm font-bold  border-black rounded-xl"
              >
                <a
                  class="hover:opacity-75 text-white"
                  href="https://immune.pw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immune
                </a>

                {/* <a
                  class="text-gray-900 hover:text-opacity-75"
                  href="https://github.com/immunedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a> */}

                <a
                  class="hover:opacity-75 text-white"
                  href="https://github.com/immunedev"   // tu bedzie repo projektu 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </nav>

              {/*<p class="max-w-lg mx-auto text-xs text-gray-500">
                Tu se cos wpiszemy ale nie mam kurwa totalnie pojecia co bedzie git zajmuje sie 
                tylko dizajnem essa 

              </p>*/}

              <p class="text-xs font-medium text-gray-500">Immune LLC / 2022</p>
            </div>
          </div>
        </footer>

    )
}