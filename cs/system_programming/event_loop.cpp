
/*
Goals: create a event loop 
Requirement
- should be able to sleep in an efficient way
*/
#include <iostream>
#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif



using namespace std;


void eventLoop ()
{
	bool hasJob = 0;
	while (true) 
	{
		hasJob = !hasJob;

		if (hasJob) {
			cout << "doing job" << endl;
			sleep(100);
		}
		else {
			cout << "no job" << endl;
		}
		
	}

} 


struct SleepJob {
	int timeInMilliSeconds;
	int hasDone;
	char title[];
};


int main()
{

	eventLoop();

	return 0;

}
