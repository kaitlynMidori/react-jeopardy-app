<div className="board">
    //this is row for question objects
    {myquestions.map((questionObj)=>{return (
        <div className="col">
        <div className="card">
            <div className="card-body text-center">
                {questionObj.category}
            </div>
        </div>
        </div>
    )})}
    //end row for question objects
    //row for all question answers
       questionObj.answers.map((answerObj)=>{
        return (
            <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link" onClick{ () => setModalShow(true)}>{
                        switch(index){
                            case 0:
                                return 100
                            case 1 :
                                return 200
                        }
                    }</button>
                </div>
            </div>
        </div>
        <Modal show={modalShow}onHide={() => setModalShow(false)} category={questionObj.vategory} question={answerObj.question} ></Modal>
        )
       })
    
    //end row for all question answers
    







<Table>
<TableHeader>
  <TableRow>
    <TableCell scope="col" border="all">
      <Select
        placeholder="Category"
        options={['option 1', 'option 2', 'option 3']}
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
    </TableCell>
    <TableCell scope="col" border="all">
    Category
    </TableCell>
    <TableCell scope="col" border="all">
    Category
    </TableCell>
    <TableCell scope="col" border="all">
    Category
    </TableCell>
    <TableCell scope="col" border="all">
    Category
    </TableCell>
    <TableCell scope="col" border="all">
      Category
    </TableCell>
  </TableRow>
</TableHeader>
<TableBody>
<TableRow>
    <TableCell scope="col" border="all">Chris</TableCell>
    <TableCell scope="col" border="all">Chris</TableCell>
    <TableCell scope="col" border="all">Chris</TableCell>
    <TableCell scope="col" border="all">Chris</TableCell>
  </TableRow>
  <TableRow>
    <TableCell scope="col" border="all">second</TableCell>
    <TableCell scope="col" border="all">second</TableCell>
    <TableCell scope="col" border="all">second</TableCell>
    <TableCell scope="col" border="all">second</TableCell>
  </TableRow>
  <TableRow>
    <TableCell scope="col" border="all">third</TableCell>
    <TableCell scope="col" border="all">third</TableCell>
    <TableCell scope="col" border="all">third</TableCell>
    <TableCell scope="col" border="all">third</TableCell>
  </TableRow>
  <TableRow>
    <TableCell scope="col" border="all">fourth</TableCell>
    <TableCell scope="col" border="all">fourth</TableCell>
    <TableCell scope="col" border="all">fourth</TableCell>
    <TableCell scope="col" border="all">fourth</TableCell>
  </TableRow>
</TableBody>
</Table>

//gameboard full 
<div className="row categoryRow">
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 1
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 2
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 3
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 4
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 5
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    Category 6
                </div>
            </div>
        </div>
    </div>
    <div className="row 200Row">
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">200</button>
                </div>
            </div>
        </div>
    </div>
    <div className="row 400Row">
    <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">400</button>
                </div>
            </div>
        </div>
    </div>
    <div className="row 600Row">
    <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">600</button>
                </div>
            </div>
        </div>
    </div>
    <div className="row 800Row">
    <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">800</button>
                </div>
            </div>
        </div>
    </div>
    <div className="row 1000Row">
    <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <button type="button" class="btn btn-link">1000</button>
                </div>
            </div>
        </div>
    </div>
</div>