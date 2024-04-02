import Stacked from "./Stacked";
import { useState } from "react";

const people = [
  {
    id: 3,
    fromName: "Shaw Adley",
    fromEmail: "shaw@getmemeetings.com",
    toName: "",
    toEmail: "mitrajit2022@gmail.com",
    cc: null,
    bcc: null,
    threadId: 1,
    messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    subject:
      "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
    body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
    isRead: true,
    folder: "INBOX",
    uid: 594,
    sentAt: "2023-11-23T04:08:45.000Z",
    archivedAt: null,
    createdAt: "2023-11-23T07:38:46.000Z",
    updatedAt: "2023-11-23T07:38:46.000Z",
    deletedAt: null,
  },
  {
    id: 4,
    fromName: "Shaw Adley",
    fromEmail: "shaw@getmemeetings.com",
    toName: "",
    toEmail: "mitrajit2022@gmail.com",
    cc: null,
    bcc: null,
    threadId: 2,
    messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    subject: "Test mail",
    body: "<p>Test mail</p>",
    isRead: true,
    folder: "INBOX",
    uid: 594,
    sentAt: "2023-11-23T04:08:45.000Z",
    archivedAt: null,
    createdAt: "2023-11-23T07:38:46.000Z",
    updatedAt: "2023-11-23T07:38:46.000Z",
    deletedAt: null,
  },
];

export default function StackedList() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="flex h-screen">
      {/* Left side: Email list */}
      <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            All Inbox (S)
          </h2>
          <button className="flex items-center px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white" // Add text-white class here
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
        <div>
          <div className="mt-2 mx-auto">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#11182] bg-[#23272c] placeholder-[#34373c] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* Display email list */}
        {/* onClick={() => handleEmailSelect(email)} */}
        {people.map((email, idx) => (
          <div class="mt-8 space-y-4">
            <button
              onClick={() => handleEmailSelect(email)}
              class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
            >
              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">
                  {email.fromName}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {email.fromEmail}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {email.subject}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
      {/* Right side: Email body */}
      <div className=" bg-[#111827] p-8 overflow-y-auto">
        {selectedEmail && (
          <div className="h-full flex flex-col">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {selectedEmail.subject}
            </h2>
            <div
              className="flex-auto mt-4 text-gray-700 dark:text-white overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: selectedEmail.body }}
            />
          </div>
        )}
        {!selectedEmail && (
          <div className="h-full flex flex-col">
            {!selectedEmail && (
              <div className="h-full flex flex-col justify-center items-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Select an email to view
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
