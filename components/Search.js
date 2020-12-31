const Search = () => {
 return (
     <div className='overlay'>
         <div className='container'>
            <div className='row'>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <form>
                        <div className='form-row'>
                            <div className='col-12 col-md-9 mb-2 mb-md-0'>
                                <input type='email' className='form-control form-control-lg' placeholder='Search' />
                            </div>
                            <div className='col-12 col-md-3'>
                                <button type='submit' className='btn btn-block btn-lg btn-primary'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         </div>
     </div>
 )  
}

export default Search