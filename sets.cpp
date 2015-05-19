#include <iostream>
#include <list>
using namespace std;

class Set{
	public:
	list<int> elements;
	list<int>::iterator p;
	Set(){	
		p = elements.begin();
	};
	void describe(){
		p = elements.begin();
		while(p!=elements.end()){
			cout <<*p<<endl;
			p++;
		}

	};
	void insert(int x){
		p = elements.begin();
		bool flag = false;
		while(p!= elements.end()){
			if(*p == x) {
				flag = true;
			}
			p++;
			
		}
		if(!flag) elements.insert(p,x);
		
	};
	Set setUnion(Set b){	
		Set temp;
		list<int>::iterator p1;
		list<int>::iterator p2;
		list<int>::iterator pTemp;
		p1 = elements.begin();
		p2 = b.elements.begin();
		pTemp = temp.elements.begin();
		
		while(p1!=elements.end()){
			temp.insert(*p1);
			p1++;
		}
		
		while(p2!=b.elements.end()){
			temp.insert(*p2);
			p2++;
		}
		return temp;
		
	};

};



int main(){

	Set a;
	Set b;
	a.insert(10);
	a.insert(20);
	a.insert(20);
	a.insert(4);
	a.describe();
	b.insert(1);
	b.insert(10);
	b.insert(2);
	b.insert(3);
	b.describe();
	cout<<"union";
	Set c;
	c = a.setUnion(b);
	c.describe();
	return 0;
}