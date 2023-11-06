import Logo from "../components/tuveri/Logo";

function PageTuveri() {
    const nome = 'Martina';
    const cognome = 'Tuveri';
  
    return (
      <div>
        <Logo /> {}
        <h1>{nome} {cognome}</h1>
        <p>facendo git merge master</p>
        <p>tagliere di salumi</p>
        <p>pappardelle al ragù di cervo</p>
        <p>scaloppine ai funghi porcini</p>
        <p>millefoglie</p>
        <p>per unire le commit bisogna eseguire il comando git rebase –i "codice dell'ultima commit effettuata",
          dopodichè selezionare squash per unire le altre a questa ed avenrne quindi solo una</p>
        <p>Gemitaiz</p>
        <p>Brad Pitt</p>
        {}
      </div>
    );
  }
import Logo from "../components/tuveri/Logo";

function PageRossi() {
    const nome = 'Martina';
    const cognome = 'Tuveri';
  
    return (
      <div>
        <Logo /> {}
        <h1>{nome} {cognome}</h1>
        <p> ho creato una nuova branch, ho fatto git merge master passando così tutte le modifiche sulla nuova branch,
            sono tornata su master, ho eliminato le commit con git reset --hard HEAD e alla fine git push</p>
      </div>
    );
  }
  
  export default PageTuveri;




