import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Zero Trust Security: The Future of Enterprise Defense',
    excerpt: 'Explore how Zero Trust architecture is revolutionizing cybersecurity by eliminating implicit trust and continuously validating every transaction.',
    content: `Zero Trust security represents a fundamental shift in how we approach cybersecurity. Unlike traditional perimeter-based security models, Zero Trust assumes that threats exist both inside and outside the network.

## Key Principles of Zero Trust

1. **Never Trust, Always Verify**: Every user and device must be authenticated and authorized before accessing resources.
2. **Least Privilege Access**: Users should only have access to the minimum resources necessary for their role.
3. **Assume Breach**: Design systems assuming that attackers are already inside the network.

## Implementation Strategy

The transition to Zero Trust requires careful planning and phased implementation. Organizations should start by identifying their critical assets and implementing strong identity and access management controls.

Advanced threat detection and response capabilities are essential for maintaining visibility across the entire infrastructure.`,
    author: {
      name: 'Sarah Chen',
      role: 'Security Architect',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Architecture',
    tags: ['Zero Trust', 'Enterprise Security', 'Network Security'],
    publishedAt: '2024-01-15',
    readingTime: 8,
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'AI-Powered Threat Detection: Machine Learning in Cybersecurity',
    excerpt: 'Discover how artificial intelligence and machine learning are transforming threat detection and response capabilities in modern security operations.',
    content: `Artificial Intelligence is revolutionizing cybersecurity by enabling organizations to detect and respond to threats at machine speed. Modern AI-powered security solutions can analyze vast amounts of data to identify patterns and anomalies that would be impossible for human analysts to detect.

## The Power of Machine Learning

Machine learning algorithms excel at:
- Pattern recognition in network traffic
- Behavioral analysis of users and entities
- Automated threat classification
- Predictive threat intelligence

## Real-World Applications

Organizations are successfully implementing AI in various security domains, from endpoint detection to cloud security monitoring.`,
    author: {
      name: 'Marcus Rodriguez',
      role: 'AI Security Researcher',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'AI & ML',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Threat Detection'],
    publishedAt: '2024-01-12',
    readingTime: 6,
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Cloud Security Best Practices: Protecting Your Digital Assets',
    excerpt: 'Learn essential cloud security strategies to protect your organization\'s data and applications in multi-cloud environments.',
    content: `Cloud security requires a comprehensive approach that addresses the unique challenges of distributed computing environments. Organizations must implement robust security controls across all layers of their cloud infrastructure.

## Essential Security Controls

- Identity and Access Management (IAM)
- Data encryption at rest and in transit
- Network security and segmentation
- Continuous monitoring and logging
- Compliance and governance frameworks

## Multi-Cloud Considerations

Managing security across multiple cloud providers introduces additional complexity that requires specialized tools and expertise.`,
    author: {
      name: 'Emma Thompson',
      role: 'Cloud Security Engineer',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Cloud Security',
    tags: ['Cloud Security', 'AWS', 'Azure', 'Best Practices'],
    publishedAt: '2024-01-10',
    readingTime: 7,
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Incident Response Playbook: When Seconds Matter',
    excerpt: 'A comprehensive guide to building effective incident response procedures that minimize damage and recovery time.',
    content: `Effective incident response can mean the difference between a minor security event and a catastrophic breach. Organizations need well-defined playbooks and trained response teams to handle security incidents efficiently.

## The Incident Response Lifecycle

1. **Preparation**: Establish response procedures and train teams
2. **Detection**: Identify and analyze potential security incidents
3. **Containment**: Limit the scope and impact of the incident
4. **Eradication**: Remove threats from the environment
5. **Recovery**: Restore systems to normal operations
6. **Lessons Learned**: Improve processes based on incident analysis

## Building Your Response Team

A successful incident response team requires members with diverse skills and clear roles and responsibilities.`,
    author: {
      name: 'David Park',
      role: 'Incident Response Manager',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Incident Response',
    tags: ['Incident Response', 'Security Operations', 'Crisis Management'],
    publishedAt: '2024-01-08',
    readingTime: 9,
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'The Human Factor: Social Engineering and Security Awareness',
    excerpt: 'Understanding how social engineering attacks exploit human psychology and how to build effective security awareness programs.',
    content: `Despite advances in technology, humans remain the weakest link in cybersecurity. Social engineering attacks exploit human psychology to bypass technical security controls and gain unauthorized access to systems and data.

## Common Social Engineering Techniques

- Phishing and spear-phishing emails
- Pretexting and impersonation
- Baiting and quid pro quo attacks
- Tailgating and physical security breaches

## Building Security Awareness

Effective security awareness programs combine education, training, and regular testing to help employees recognize and respond appropriately to social engineering attempts.

## Measuring Program Effectiveness

Organizations should track metrics such as phishing simulation results, security incident reports, and employee engagement to assess the effectiveness of their security awareness initiatives.`,
    author: {
      name: 'Lisa Wang',
      role: 'Security Awareness Manager',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Human Factors',
    tags: ['Social Engineering', 'Security Awareness', 'Training'],
    publishedAt: '2024-01-05',
    readingTime: 5,
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Ransomware Defense: Strategies to Protect Your Organization',
    excerpt: 'Comprehensive strategies to prevent, detect, and respond to ransomware attacks in the modern threat landscape.',
    content: `Ransomware continues to be one of the most significant threats facing organizations today. Effective ransomware defense requires a multi-layered approach that addresses prevention, detection, and response.

## Prevention Strategies

- Regular security awareness training
- Robust backup and recovery procedures
- Network segmentation and access controls
- Endpoint detection and response (EDR) solutions
- Vulnerability management and patching

## Detection and Response

Organizations must implement monitoring solutions that can detect ransomware activity early in the attack chain and respond quickly to minimize impact.

## Recovery Planning

Having a well-tested incident response plan specifically for ransomware attacks is crucial for rapid recovery and business continuity.`,
    author: {
      name: 'Michael Chen',
      role: 'Threat Intelligence Analyst',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Threat Intelligence',
    tags: ['Ransomware', 'Malware', 'Business Continuity'],
    publishedAt: '2024-01-03',
    readingTime: 6,
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const categories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'architecture', name: 'Architecture', count: blogPosts.filter(p => p.category === 'Architecture').length },
  { id: 'ai-ml', name: 'AI & ML', count: blogPosts.filter(p => p.category === 'AI & ML').length },
  { id: 'cloud-security', name: 'Cloud Security', count: blogPosts.filter(p => p.category === 'Cloud Security').length },
  { id: 'incident-response', name: 'Incident Response', count: blogPosts.filter(p => p.category === 'Incident Response').length },
  { id: 'human-factors', name: 'Human Factors', count: blogPosts.filter(p => p.category === 'Human Factors').length },
  { id: 'threat-intelligence', name: 'Threat Intelligence', count: blogPosts.filter(p => p.category === 'Threat Intelligence').length }
];