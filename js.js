class Stack { 
    constructor() {
        this.current = this.peak = null;

    }
  
    push(data) {
        if (!this.peak) {
            this.current = this.peak = new Element(data);
        } else {
            let tempElem = this.peak;
            tempElem.front = this.peak = new Element(data, tempElem, null);
        }
    }
    pop() {
        if (this.peak && this.peak === this.current) {
            this.current = this.peak.back;
        }
        if (this.peak && this.peak.back) {
            this.peak = this.peak.back;
            this.peak.front = null;
        } else {
            this.peak = this.current = null;
        }
        
    }
    moveNext() {
        if (this.current && this.current.front)
            this.current = this.current.front;
    }
    moveBack() {
        if (this.current && this.current.back)
            this.current = this.current.back;
    }
    showCurrent() {
        if (this.current)
            return this.current.data;
        else
            return "No Data Yet";
    }
}




class Element{
     constructor(data,back,front) {
      this.data=data
      this.back=back
      this.front=front;

     }
}
let stack = new Stack();
document.getElementById('data').innerHTML = stack.showCurrent();

function push() {
    stack.push(document.getElementById('elem').value);
    document.getElementById('data').innerHTML = stack.showCurrent();
}

function pop() {
    stack.pop();
    document.getElementById('data').innerHTML = stack.showCurrent();
}
function next() {
    stack.moveNext();
    document.getElementById('data').innerHTML = stack.showCurrent();
}

function back() {
    stack.moveBack();
    document.getElementById('data').innerHTML = stack.showCurrent();
}