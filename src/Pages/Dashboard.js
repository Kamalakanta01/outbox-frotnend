import { useEffect, useState } from "react";
import StackedList from "../Components/StackedList";
import axios from "axios";

export default function Dashboard({token}) {
  const[server,setServer]=useState(true)
  const [buttonStates, setButtonStates] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const toggleColor = (index) => {
    // Create a new array where only the clicked button's state is set to true
    const newButtonStates = buttonStates.map((state, i) => i === index);
    setButtonStates(newButtonStates);
  };

  useEffect(()=>{
    axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(response=>{
      console.log(response.data)
    })
    .catch(err=>{
      console.log(err)
      setServer(false)
    })
  })

  return (
    <>{
      !server? 
      (<div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="text-red-500 bg-red-100 dark:text-red-400 dark:bg-gray-800 border border-red-200 dark:border-red-500 px-4 py-2 rounded-lg">
        Unable to fetch data from server. Please try again later.
      </div>
    </div>)
      :
      (<aside className="flex">
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
        <a className="mb-10">
          <img
            class="w-auto h-6"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </a>

        {/* Home Button */}
        <a
          onClick={() => toggleColor(0)}
          className={`p-1.5 ${
            buttonStates[0]
              ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
              : "text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          } focus:outline-none transition-colors duration-200 rounded-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>

        {/* Mail Button */}
        <a
          onClick={() => toggleColor(1)}
          className={`p-1.5 ${
            buttonStates[1]
              ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
              : "text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          } focus:outline-none transition-colors duration-200 rounded-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>

        {/* Compose Button */}
        <a
          onClick={() => toggleColor(2)}
          className={`p-1.5 ${
            buttonStates[2]
              ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
              : "text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          } focus:outline-none transition-colors duration-200 rounded-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </a>

        {/* Inbox Button */}
        <a
          onClick={() => toggleColor(3)}
          className={`p-1.5 ${
            buttonStates[3]
              ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
              : "text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          } focus:outline-none transition-colors duration-200 rounded-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
            />
          </svg>
        </a>

        {/* Settings Button */}
        <a
          onClick={() => toggleColor(4)}
          className={`p-1.5 ${
            buttonStates[4]
              ? "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-gray-800"
              : "text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          } focus:outline-none transition-colors duration-200 rounded-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
          </svg>
        </a>
      </div>
      <div>
        {buttonStates[3] && <StackedList/>}
      </div>
    </aside>)
    }
    </>
  );
}
