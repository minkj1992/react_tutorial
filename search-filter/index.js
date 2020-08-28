URL = "http://127.0.0.1:8000/favorites/";

class App extends React.Component {
	state = {
		post: [],
		allPosts: []
	};

	componentDidMount() {
		axios
			.get(URL, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
                },
                params: {
                    name: "태진아"
                  }
			})
			.then(({ data }) => {
				this.setState({
					post: data,
					allPosts: data // array data from JSON stored in these
				});
			})
			.catch(err => {});
	}

	_onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter(item =>
			item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};

	render() {
		return (
			<div className="container">
				<div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						{/* input field activates onKeyUp function on state change */}
						<input
							type="search"
							onChange={this._onKeyUp}
							name="s"
							id="s"
							placeholder="Search"
						/>
						<button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</button>
					</form>
				</div>
				<ul className="list-group">
					{this.state.post.map((item, index) => (
						<li className={"block-" + index}>
							<img className="image" src={item.image_url}/>
                            <h3>{item.name}</h3>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));


Request.post(`/prohibit`, {
    text: text,
  })
    .then((res) => {
      let keyword = [];
      if (res.status === 200 && res.data.isMatched === true) {
        keyword = res.data.keywords;
      }
      this.setState({
        nickname: text,
        prohibit_keywords: keyword,
      });
    })
    .catch((err) => {
      console.log(err);
    });