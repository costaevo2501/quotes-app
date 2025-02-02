export default function QuotePage() {
    const quotes = [
        {
            text: "Be the change you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author: "Albert Einstein"
        },
        {
            text: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost"
        },
        {
            text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        }
    ];

    return (
        <div className="container mt-4">
            <h1>All Quotes</h1>

            <form className="row m-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Search by Author
          </span>
          <input type="text" className="form-control" placeholder="Author Name" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      
            {quotes.map((quote) => (
                <div className="card mt-3">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{quote.text}</p>
                            <footer className="blockquote-footer mt-2">{quote.author}</footer>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
}