export default function Stacked({email}) {
  const { fromName, fromEmail, subject, body } = email;
  return (
    <div class="mt-8 space-y-4">
      <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
        <div class="text-left rtl:text-right">
          <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">
            {fromName}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-300">{fromEmail}</p>
          <p className="text-xs text-gray-500 dark:text-gray-300">{subject}</p>
        </div>
      </button>
    </div>
  );
}
