import $ from 'jquery';

class paginationInfiniteScroll {
	constructor() {
		this.isLoading = false;
		this.loadMoreDOM = $( '#loadMorePostsTrigger' );

		this.checkStatus();

		if ( 0 < this.loadMoreDOM.length ) {

			// event triggered when user is close to the pagination section
			$( window ).scroll( this.checkScrollPosition );
		}
	}

	checkScrollPosition = () => {
		if (
			$( window ).scrollTop() + $( window ).height() >
			this.loadMoreDOM.offset().top - 800
		) {
			if (
				! this.isLoading &&
				parseInt( websiteData.max_page ) >
					parseInt( websiteData.currentPage )
			) {
				this.isLoading = true;
				this.loadMore();
			}
		}
	};

	checkStatus = () => {
		if (
			parseInt( websiteData.max_page ) ===
			parseInt( websiteData.currentPage )
		) {
			this.loadMoreDOM.remove();
		}

		this.isLoading = false;
	};

	loadMore = () =>
		$.ajax({
			url: websiteData.ajaxUrl,
			method: 'GET',
			accepts: {
				'Content-Type': 'application/json'
			},
			data: {
				action: 'load_more_posts',
				nonce: websiteData.nonce,
				currentPage: websiteData.currentPage,
				queryVars: websiteData.queryVars
			},
			success: ( res ) => {
				if ( res.success ) {
					this.loadMoreDOM.before( res.data );

					websiteData.currentPage =
						parseInt( websiteData.currentPage ) + 1;
				}
			},
			complete: this.checkStatus
		});
}

new paginationInfiniteScroll();
