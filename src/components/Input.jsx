import 'bootstrap/dist/css/bootstrap.css'

function Input(){
    return (
        <div class="inputSearch">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Pesquisa uma cidade" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Pesquisar</button>
        </div>
    </div>
    )
}

export default Input