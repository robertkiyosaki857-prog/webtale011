/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const DEFAULT_QUERY =
  'view=guest&i=punjabi&g=Gurpreet&b=Harleen&d=2026-12-05&v=Taj+Swarna+%26+Royal+Grand+Palace&invite=kerala-wedding&c=JTdCJTIycHJlc2V0SWQlMjIlM0ElMjJwdW5qYWJpLWthbGVlcmUlMjIlMkMlMjJncm9vbSUyMiUzQSUyMkd1cnByZWV0JTIyJTJDJTIyYnJpZGUlMjIlM0ElMjJIYXJsZWVuJTIyJTJDJTIybW9ub2dyYW0lMjIlM0ElMjJHSCUyMiUyQyUyMmhhc2h0YWclMjIlM0ElMjIlMjNHdXJwcmVldFdlZHNIYXJsZWVuJTIyJTJDJTIyZGF0ZSUyMiUzQSUyMjIwMjYtMTItMDUlMjIlMkMlMjJkYXRlRm9ybWF0dGVkJTIyJTNBJTIyRGVjZW1iZXIlMjA1JTJDJTIwMjAyNiUyMiUyQyUyMnRpbWUlMjIlM0ElMjIxMSUzQTAwJTIwQU0lMjAoQW5hbmQlMjBLYXJhaiklMjIlMkMlMjJ2ZW51ZSUyMiUzQSUyMlRhaiUyMFN3YXJuYSUyMCUyNiUyMFJveWFsJTIwR3JhbmQlMjBQYWxhY2UlMjIlMkMlMjJjaXR5JTIyJTNBJTIyQW1yaXRzYXIlMkMlMjBQdW5qYWIlMjIlMkMlMjJ3ZWxjb21lJTIyJTNBJTIyR3JhbmQlMkMlMjByb21hbnRpYyUyQyUyMGZlc3RpdmUlMkMlMjB3YXJtJTIwbHV4dXJ5JTIwd2l0aCUyMGdsb3dpbmclMjBib2tlaCUyMGxpZ2h0JTIwb3ZlcmxheXMlMjBhbmQlMjBpbnRyaWNhdGUlMjB0cmFkaXRpb25hbCUyMGRldGFpbHMlM0ElMjBLYWxlZXJlaW4lMkMlMjBDaG9vZGElMkMlMjBTZWhyYSUyQyUyMGZsb3JhbCUyMHZhcm1hbGEuJTIyJTJDJTIyc2NyYXRjaFRpdGxlJTIyJTNBJTIyM0QlMjBNQUNSTyUyMFJJVFVBTCUyMENMT1NFLVVQJTNBJTIwSEFUSExFV0ElMjIlMkMlMjJzY3JhdGNoU3VidGl0bGUlMjIlM0ElMjJHZW50bHklMjBzY3JhdGNoJTIwdG8lMjByZXZlYWwlMjB0aGUlMjBzYWNyZWQlMjBIYXRobGV3YSUyMGhhbmQlMjB1bmlvbiUzQSUyMHJlZCUyMENob29kYSUyQyUyMGJyaWRhbCUyME1laGVuZGklMkMlMjBnb2xkJTIwcmluZ3MlMjAlMjYlMjBmbG9yYWwlMjB0aHJlYWRzJTIyJTJDJTIybXVzaWMlMjIlM0ElMjJzaGVobmFpJTIyJTJDJTIyY3VsdHVyYWxUaGVtZSUyMiUzQSUyMk5vcnRoJTIwSW5kaWFuJTIwJTJGJTIwUHVuamFiaSUyMiU3RA';

if (typeof window !== 'undefined') {
  if (!window.location.search && !window.location.hash) {
    window.history.replaceState(null, '', '/?' + DEFAULT_QUERY);
  }

  // Inject script module if not already loaded
  if (!document.querySelector('script[src*="index-4Y0hrGRV.js"]')) {
    const script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = '';
    script.src = '/assets/index-4Y0hrGRV.js';
    document.body.appendChild(script);
  }
}


