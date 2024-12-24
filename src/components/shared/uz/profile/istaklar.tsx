import Illustrator from "../../../imgs/illustrator.png";

function Istaklar() {
  return (
    <div className="w-full flex">
      <div className="px-3 py-6">
        <a href="/uz/profile">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 justify-start gap-2 max-md:w-fit max-md:justify-center   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-gauge-circle size-5 text-muted-foreground"
            >
              <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M13.4 10.6 19 5"></path>
            </svg>
            <span className="max-md:hidden">Boshqaruv paneli</span>
          </button>
        </a>
        <a href="/uz/profile/my-courses">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-monitor-play size-5 text-muted-foreground"
            >
              <path d="m10 7 5 3-5 3Z"></path>
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <path d="M12 17v4"></path>
              <path d="M8 21h8"></path>
            </svg>
            <span className="max-md:hidden">Mening kurslarim</span>
          </button>
        </a>
        <a href="/uz/profile/wishlist">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-list-video size-5 text-muted-foreground"
            >
              <path d="M12 12H3"></path>
              <path d="M16 6H3"></path>
              <path d="M12 18H3"></path>
              <path d="m16 12 5 3-5 3v-6Z"></path>
            </svg>
            <span className="max-md:hidden">Istaklar ro'yxati</span>
          </button>
        </a>
        <a href="/uz/profile/credit-cards">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-credit-card size-5 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            <span className="max-md:hidden">Kredit kartalari</span>
          </button>
        </a>
        <a href="/uz/profile/reviews">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-message-square-more size-5 text-muted-foreground"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M16 10h.01"></path>
            </svg>
            <span className="max-md:hidden">Izohlar</span>
          </button>
        </a>
        <a href="/uz/profile/notifications">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-bell size-5 text-muted-foreground"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span className="max-md:hidden">Bildirishnoma</span>
          </button>
        </a>
        <a href="/uz/profile/settings">
          <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex w-60 mt-3 justify-start gap-2 max-md:w-fit max-md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings2 size-5 text-muted-foreground"
            >
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
            <span className="max-md:hidden">Sozlamalar</span>
          </button>
        </a>
        <button className="mt-3 items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 flex w-full justify-start gap-2 max-sm:w-fit sm:hidden">
          <a href="/uz">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out size-5 text-muted-foreground"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </a>
        </button>
      </div>
      <div className="mx-5 my-3 w-full rounded-md bg-secondary px-4 pb-4">
        <div className="pt-4">
          <h1 className="font-space-grotesk text-4xl font-bold">
            Istaklar ro'yxati
          </h1>
          <p className="text-sm font-medium text-muted-foreground">
            Sevimli kurslaringiz. Endi o'rganishga boshlang!
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justifey-center">
          <img
            alt="No result illustration"
            loading="lazy"
            width="270"
            height="200"
            decoding="async"
            data-nimg="1"
            className="block object-contain"
            src={Illustrator}
          />
          <h2 className="mt-8 font-space-grotesk text-2xl font-bold">
            Istaklar ro'yxatingizda hech qanday kurslar yo'q
          </h2>
          <p className="my-3.5 max-w-md text-center">
            Siz hali istaklar ro'yxatingizga hech qanday kursni qo'shmagansiz.
            🚀 Sizga mos kurslarni toping va ularni istaklar ro'yxatingizga
            qo'shing. 💡
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1"></div>
      </div>
    </div>
  );
}

export default Istaklar;
