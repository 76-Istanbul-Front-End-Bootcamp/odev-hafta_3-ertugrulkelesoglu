class Animal {
    constructor(name,image){
      this.name = name;
      this.image=image;
    }
  
    action(e){
      e.stopPropagation();
    document.getElementById(this.actionSoundName).play();
    } 
    showImage(){
      var petImage = document.getElementById("imageplace");
      var image = petImage.querySelector("img");
      if(image){
        image.src=this.image;
        petImage.appendChild(image)
  
      }
  
      else{
      var newImage = document.createElement("img")
      newImage.src=this.image;
      newImage.height = 200;
      petImage.appendChild(newImage)
      }
  
      
      
  
    }
    putInTheDocument (){
      var petsTable = document.getElementById("petsTable");
      var petTR = document.createElement("tr");
    
      var petNameTD = document.createElement("td");
      petNameTD.textContent = this.name;
      petTR.appendChild(petNameTD);
    
      var petLegsTD = document.createElement("td");
      petLegsTD.textContent = this.legs;
      petTR.appendChild(petLegsTD);
    
      var petActionTD = document.createElement("td");
      var petActionTDButton = document.createElement("button");
      petActionTDButton.textContent = this.actionText;
      petActionTD.appendChild(petActionTDButton);
      petTR.appendChild(petActionTD);
      
      petActionTDButton.onclick = this.action.bind(this);
      petsTable.querySelector("tbody").appendChild(petTR)
       petTR.onclick = this.showImage.bind(this)
    }
  }
  
  
  
  
  
  class Cat extends Animal{
    constructor(name,image){
      super(name,image)
      this.legs = 4;
      this.actionText = "Meoow";
      this.actionSoundName = "meow";
      
    }
  }
  
  
  
  class Monkey extends Animal{
    constructor(name,image){
      super(name,image)
      this.legs = 2;
      this.actionText = "Scream";
      this.actionSoundName = "scream";
    }
  }
  
  
  
  
  let Mila = new Cat("Mila","https://i4.hurimg.com/i/hurriyet/75/1200x675/5f2ebbaf0f25441490314a5f.jpg");
  Mila.putInTheDocument();
  
  let Charlie = new Monkey("Charlie","https://i4.hurimg.com/i/hurriyet/75/750x422/55ea52f3f018fbb8f8787459.jpg");
  Charlie.putInTheDocument();
  //pushdeneme