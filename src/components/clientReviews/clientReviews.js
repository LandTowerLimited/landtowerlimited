import React from "react";
import { ExternalLinks } from "../../url";

/**
 * Real Google reviews for Land Tower (copied word for word from the
 * Google Business Profile). Update this list when new reviews come in.
 */
const GOOGLE_RATING = "4.8";
const reviews = [
  {
    name: "Emmanuel Elwinn",
    rating: 5,
    text: "The team at LAND TOWER LIMITED has consistently demonstrated a genuine interest in my satisfaction. Their efforts to exceed my expectations have not gone unnoticed, and I appreciate their hard work",
    color: "bg-emerald-600",
  },
  {
    name: "Jennifer Bernard",
    rating: 5,
    text: "Land Tower Limited consistently delivers exceptional results, providing value that exceeds expectations while staying within budget. I have a high regard for Land Tower Limited.",
    color: "bg-orange-700",
  },
  {
    name: "Tariah Adams",
    rating: 4,
    text: "They delivered a world class kitchen. Really lovely",
    color: "bg-teal-600",
  },
  {
    name: "Che Any",
    rating: 5,
    text: "Land Towers gets the job done.",
    color: "bg-pink-700",
  },
];

function Stars({ rating, size = "w-4 h-4" }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className={`${size} ${
            n <= rating ? "text-landTower-gold-color" : "text-gray-300"
          }`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function ClientReviews() {
  return (
    <section className="w-full bg-slate-100 py-14 md:py-20 px-4 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="font-graphikMedium text-sm md:text-base tracking-wide text-gray-500 uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 font-georgiaBold text-3xl md:text-5xl text-gray-700">
            What Our <span className="text-landTower-gold3-color">Clients</span>{" "}
            Say
          </h2>
          <div className="mt-5 flex justify-center items-center gap-3">
            <span className="font-graphikBold text-3xl text-gray-700">
              {GOOGLE_RATING}
            </span>
            <Stars rating={5} size="w-5 h-5" />
            <span className="font-graphikRegular text-gray-500 text-sm">
              {reviews.length} Google reviews
            </span>
          </div>
        </div>

        <div className="mt-10 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto flex flex-col bg-white rounded-md shadow-sm border border-gray-200 p-6"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 font-graphikRegular text-gray-700 text-base leading-relaxed">
                &#34;{review.text}&#34;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-graphikMedium ${review.color}`}
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-graphikSemibold text-gray-800 text-sm">
                    {review.name}
                  </span>
                  <span className="block font-graphikRegular text-gray-500 text-xs">
                    Google review
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="md:hidden mt-2 text-center font-graphikRegular text-xs text-gray-500">
          Swipe to see more reviews &rarr;
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={ExternalLinks.googleReviews}
            target="_blank"
            rel="noreferrer"
            className="w-64 text-center py-3 border-2 border-gray-700 text-gray-700 font-graphikMedium text-sm tracking-wide uppercase transition-colors hover:bg-gray-700 hover:text-white"
          >
            Read all reviews on Google
          </a>
          <a
            href={ExternalLinks.googleWriteReview}
            target="_blank"
            rel="noreferrer"
            className="w-64 text-center py-3 border-2 border-landTower-gold3-color bg-landTower-gold3-color text-white font-graphikMedium text-sm tracking-wide uppercase transition-opacity hover:opacity-90"
          >
            Leave us a review
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
