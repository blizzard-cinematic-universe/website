import Carousel from 'react-bootstrap/Carousel';
import "../scss/app.scss"

export function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark p-4">
        <h1 className="text-light text-center m-0">Welcome to Blizzard_Animate</h1>
        <h3 className="text-light text-center">Your go-to channel for Minecraft Java PvP!</h3>
        <p className="text-center"><a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@Blizzard_Animate" className="text-light">YouTube Channel link</a></p>
      </header>

      <main className="p-4 flex-grow-1">
        <section aria-labelledby="featured-videos-heading">
          <h2 id="featured-videos-heading">Featured Videos</h2>
          <Carousel slide={false} interval={null} role="region" aria-label="Featured videos carousel">
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/IciqB0FWCro?rel=0"
                  allow="encrypted-media"
                  title="Bedwars but I can only buy 5 items"
                  loading="lazy"
                  allowFullScreen>
                </iframe>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/wklCWO1BYhU?rel=0"
                  allow="encrypted-media"
                  title="Minecraft Hardcore GONE WRONG"
                  loading="lazy"
                  allowFullScreen>
                </iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
        <section>
          ADD STUFFS HERE
        </section>
      </main>

      <footer className="p-2 bg-dark mt-auto">
        <p className="text-center text-light">© {new Date().getFullYear()} Blizzard_Animate. All rights reserved.</p>
      </footer>
    </div>
  )
}
