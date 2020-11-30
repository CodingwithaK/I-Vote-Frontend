import React from `react`

class Search extends React.Component {
    state = {
        candidateCollection = [],
        searchTerm: ``
    }

    componentDidMount(){
        fetch(`api.votesmart.org/${searchType}?key=5905b667c9a60df77360fd5b80d81e03&${inputType}${input}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    handleSearchType = type => {
        if (type = `Get candidate by zip`){
            let inputType = `zip5=`
            let searchType = `Candidates.getByZip`
        }
    }
    
    
    handleSearchChange = event => {
        this.setState({searchTerm : event.target.value})
    }

}